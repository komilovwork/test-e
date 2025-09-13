import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Ta'limda
            <span className="text-blue-600 block">Yangi Bosqich</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Zamonaviy texnologiyalarni o'rganing va o'z karerangizni rivojlantiring. 
            Professional dasturchilar bilan birga yangi ko'nikmalar egallab chiqing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <Link to="/courses">
                Kurslarni Ko'rish
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Batafsil Ma'lumot
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nima uchun bizni tanlashingiz kerak?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zamonaviy o'qitish metodlari va amaliy loyihalar orqali bilimingizni mustahkamlang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow">
              <div className="p-3 bg-blue-50 rounded-xl w-fit mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Sifatli Kontent
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mutaxassislar tomonidan tayyorlangan kurslar va amaliy mashg'ulotlar orqali 
                chuqur bilim oling.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow">
              <div className="p-3 bg-green-50 rounded-xl w-fit mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Jamoa Bilan Ishlash
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Boshqa o'quvchilar bilan birga o'rganing, tajriba almashing va 
                professional aloqalar o'rnating.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow">
              <div className="p-3 bg-purple-50 rounded-xl w-fit mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Sertifikat Olish
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Kursni muvaffaqiyatli yakunlagandan so'ng professional sertifikat 
                oling va karerangizda foydalaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            O'rganishni boshlash tayyor?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Minglab o'quvchi bizning platformamizda o'z maqsadlariga erishmoqda. 
            Ularning qatoriga qo'shiling!
          </p>
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/courses">
              Hozir Boshlash
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;