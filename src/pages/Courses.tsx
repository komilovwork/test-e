import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Users } from 'lucide-react';
import { mockCourses } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Barcha Kurslar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional ko'nikmalarni rivojlantiring va karerangizni yangi bosqichga olib chiqing
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => (
            <Card 
              key={course.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-card/80 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2 leading-relaxed">
                  {course.shortDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessonsCount} dars</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>~{course.lessonsCount * 2}s</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button 
                  asChild 
                  className="w-full group-hover:bg-blue-600 transition-colors"
                  size="lg"
                >
                  <Link to={`/courses/${course.id}`}>
                    Kursni Ko'rish
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card/80 backdrop-blur-sm rounded-2xl border border-border p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="p-3 bg-blue-50 rounded-xl w-fit mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Sifatli Kurslar</div>
            </div>
            <div>
              <div className="p-3 bg-green-50 rounded-xl w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-muted-foreground">Faol O'quvchilar</div>
            </div>
            <div>
              <div className="p-3 bg-purple-50 rounded-xl w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">O'qitish Soatlari</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;