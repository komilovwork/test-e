import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../../types';

interface ProgressBarProps {
  course: Course;
  currentLessonIndex: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ course, currentLessonIndex }) => {
  const progress = ((currentLessonIndex + 1) / course.lessons.length) * 100;
  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;

  return (
    <div className="fixed top-16 left-0 right-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium text-foreground">
            {course.title}
          </div>
          <div className="text-sm text-muted-foreground">
            {currentLessonIndex + 1} / {course.lessons.length} dars
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full bg-secondary rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-between mt-2">
            <div className="text-xs text-muted-foreground">
              {completedLessons} bajarilgan
            </div>
            <div className="text-xs text-muted-foreground">
              {Math.round(progress)}% tugallangan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;