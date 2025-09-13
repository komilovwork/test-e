import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle, PlayCircle, X, Keyboard } from 'lucide-react';
import { Course, Lesson } from '../../types';
import { Button } from '@/components/ui/button';

interface LessonSidebarProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
}

const LessonSidebar: React.FC<LessonSidebarProps> = ({ course, isOpen, onClose }) => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['lessons']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-background/95 backdrop-blur-lg border-r border-border z-50 lg:static lg:z-auto lg:bg-background"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground truncate">
                    {course.title}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="lg:hidden"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {course.lessons.length} dars mavjud
                </p>
              </div>

              {/* Lessons List */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <button
                    onClick={() => toggleSection('lessons')}
                    className="flex items-center justify-between w-full p-3 text-left bg-accent/50 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="font-medium text-foreground">Darslar</span>
                    {expandedSections.includes('lessons') ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedSections.includes('lessons') && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 mt-3">
                          {course.lessons.map((lesson, index) => (
                            <Link
                              key={lesson.id}
                              to={`/courses/${course.id}/learn/${lesson.id}`}
                              className={`flex items-center p-3 rounded-lg transition-colors ${
                                lesson.id === lessonId
                                  ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                                  : 'hover:bg-accent text-foreground'
                              }`}
                              onClick={onClose}
                            >
                              <div className="flex-shrink-0 mr-3">
                                {lesson.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                ) : (
                                  <PlayCircle className={`w-5 h-5 ${
                                    lesson.id === lessonId ? 'text-blue-600' : 'text-gray-400'
                                  } dark:${lesson.id === lessonId ? 'text-blue-400' : 'text-gray-500'}`} />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">
                                  {index + 1}. {lesson.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  ~{Math.ceil(Math.random() * 10 + 5)} daqiqa
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress Footer */}
              <div className="p-4 border-t border-border">
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Jarayon</span>
                    <span>
                      {course.lessons.filter(l => l.completed).length}/{course.lessons.length}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(course.lessons.filter(l => l.completed).length / course.lessons.length) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center text-xs text-muted-foreground mt-4 p-2 bg-accent/30 rounded-lg">
                  <Keyboard className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">
                    {navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? 'Cmd + J' : 'Ctrl + J'} to toggle
                  </span>
                  <span className="sm:hidden">Toggle shortcut</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default LessonSidebar;