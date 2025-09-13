import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { mockCourses } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Kurs topilmadi</h1>
          <Link to="/courses">
            <Button variant="outline">Kurslar sahifasiga qaytish</Button>
          </Link>
        </div>
      </div>
    );
  }

  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const progressPercent = (completedLessons / course.lessons.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kurslar sahifasiga qaytish
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 mb-8">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {course.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 items-center mb-6">
                <Badge variant="secondary" className="px-4 py-2">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {course.lessonsCount} dars
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Clock className="w-4 h-4 mr-1" />
                  ~{course.lessonsCount * 2} soat
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {completedLessons}/{course.lessonsCount} bajarilgan
                </Badge>
              </div>

              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto px-8"
              >
                <Link to={`/courses/${course.id}/learn/${course.lessons[0].id}`}>
                  <Play className="w-5 h-5 mr-2" />
                  O'rganishni Boshlash
                </Link>
              </Button>
            </div>

            {/* Lessons List */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Darslar</h2>
              
              <div className="space-y-4">
                {course.lessons.map((lesson, index) => (
                  <Card 
                    key={lesson.id} 
                    className="border border-border hover:shadow-md transition-shadow bg-card/50"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-foreground mb-2">
                            {index + 1}. {lesson.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            Amaliy mashg'ulot va kod namunalari bilan
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          {lesson.completed && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                          <Button 
                            asChild 
                            variant="ghost" 
                            size="sm"
                          >
                            <Link to={`/courses/${course.id}/learn/${lesson.id}`}>
                              <Play className="w-4 h-4 mr-1" />
                              Boshlash
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-foreground mb-4">Kurs Haqida</h3>
              
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Jarayon</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Jami darslar:</span>
                  <span className="font-semibold text-foreground">{course.lessonsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bajarilgan:</span>
                  <span className="font-semibold text-green-600">{completedLessons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Qolgan:</span>
                  <span className="font-semibold text-orange-600">{course.lessonsCount - completedLessons}</span>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  asChild 
                  className="w-full"
                  size="lg"
                >
                  <Link to={`/courses/${course.id}/learn/${course.lessons[0].id}`}>
                    Davom Etish
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;