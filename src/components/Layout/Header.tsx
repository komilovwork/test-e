import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, User } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-background/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xl font-semibold text-foreground">EduPlatform</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-950' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Bosh sahifa</span>
            </Link>
            <Link
              to="/courses"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/courses') || location.pathname.includes('/courses')
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-950' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Kurslar</span>
            </Link>
            <Link
              to="#"
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profil</span>
            </Link>
            
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
  )
}