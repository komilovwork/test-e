import { Course } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'JavaScript Asoslari',
    description: 'JavaScript dasturlash tilining asosiy tushunchalari va amaliy qo\'llanishi. O\'zgaruvchilar, funksiyalar, ob\'ektlar va DOM manipulatsiyasini o\'rganing.',
    shortDescription: 'JavaScript dasturlash tilining asosiy tushunchalari',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
    lessonsCount: 8,
    lessons: [
      {
        id: '1',
        title: 'O\'zgaruvchilar va Ma\'lumot Turlari',
        content: `# O'zgaruvchilar va Ma'lumot Turlari

JavaScript-da o'zgaruvchilar turli xil ma'lumotlarni saqlash uchun ishlatiladi. JavaScript-da 3 xil o'zgaruvchi e'lon qilish usuli mavjud:

## var, let va const

\`\`\`javascript
var name = "Ali";        // Eski usul
let age = 25;           // Zamonaviy usul
const PI = 3.14159;     // Konstanta
\`\`\`

## Ma'lumot turlari:
- **String**: Matn ma'lumotlari
- **Number**: Raqamlar
- **Boolean**: true/false qiymatlari
- **Array**: Ro'yxat
- **Object**: Ob'ektlar`,
        codeExample: `// O'zgaruvchilar e'lon qilish
let studentName = "Aziz";
const maxScore = 100;
let currentScore = 85;

console.log("Talaba:", studentName);
console.log("Ball:", currentScore + "/" + maxScore);`,
        completed: false
      },
      {
        id: '2',
        title: 'Funksiyalar',
        content: `# Funksiyalar

Funksiyalar - bu ma'lum vazifani bajaradigan kod bloklari. Ular kodni qayta ishlatish va tashkil qilish uchun juda muhimdir.

## Oddiy funksiya:
\`\`\`javascript
function greet(name) {
    return "Salom, " + name + "!";
}
\`\`\`

## Arrow funksiya:
\`\`\`javascript
const multiply = (a, b) => a * b;
\`\`\``,
        codeExample: `function calculateArea(width, height) {
    return width * height;
}

const area = calculateArea(10, 5);
console.log("Maydon:", area, "kvadrat metr");`,
        completed: false
      },
      {
        id: '3',
        title: 'Ob\'ektlar va Massivlar',
        content: `# Ob'ektlar va Massivlar

JavaScript-da murakkab ma'lumotlarni saqlash uchun ob'ektlar va massivlardan foydalanamiz.

## Ob'ektlar:
\`\`\`javascript
const student = {
    name: "Olim",
    age: 20,
    grade: "A"
};
\`\`\`

## Massivlar:
\`\`\`javascript
const fruits = ["olma", "banan", "uzum"];
\`\`\``,
        codeExample: `const course = {
    title: "JavaScript",
    duration: "3 oy",
    students: ["Ali", "Vali", "Guli"]
};

console.log("Kurs:", course.title);
console.log("Talabalar soni:", course.students.length);`,
        completed: false
      }
    ]
  },
  {
    id: '2',
    title: 'React.js Kursi',
    description: 'Modern web ilovalar yaratish uchun React.js kutubxonasini chuqur o\'rganing. Komponentlar, hooks, state management va amaliy loyihalar.',
    shortDescription: 'Modern web ilovalar yaratish uchun React.js',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    lessonsCount: 12,
    lessons: [
      {
        id: '1',
        title: 'React.js ga Kirish',
        content: `# React.js ga Kirish

React.js - Facebook tomonidan yaratilgan JavaScript kutubxonasi bo'lib, foydalanuvchi interfeyslarini yaratish uchun mo'ljallangan.

## React.js ning afzalliklari:
- **Komponent asosida**: Qayta foydalaniladigan komponentlar
- **Virtual DOM**: Tez ishlash
- **Unidirectional Data Flow**: Ma'lumotlar oqimi
- **Katta jamiyat**: Ko'p qo'llab-quvvatlash`,
        codeExample: `import React from 'react';

function Welcome(props) {
    return <h1>Salom, {props.name}!</h1>;
}

export default Welcome;`,
        completed: false
      }
    ]
  },
  {
    id: '3',
    title: 'Python Dasturlash',
    description: 'Python dasturlash tilining asoslaridan tortib, ilg\'or mavzulargacha. Ma\'lumotlar tahlili, web dasturlash va sun\'iy intellekt asoslarini o\'rganing.',
    shortDescription: 'Python dasturlash tili va uning qo\'llanilishi',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    lessonsCount: 15,
    lessons: [
      {
        id: '1',
        title: 'Python ga Kirish',
        content: `# Python ga Kirish

Python - oson o'rganiladigan va kuchli dasturlash tili. U turli sohalarda qo'llaniladi: web dasturlash, ma'lumotlar tahlili, sun'iy intellekt va boshqalar.

## Python ning afzalliklari:
- **Oddiy sintaksis**: O'qish va yozish oson
- **Ko'p maqsadli**: Turli loyihalar uchun mos
- **Katta kutubxonalar**: Har xil vazifalar uchun tayyor yechimlar`,
        codeExample: `# Oddiy Python dasturi
name = input("Ismingizni kiriting: ")
age = int(input("Yoshingizni kiriting: "))

print(f"Salom, {name}!")
print(f"Siz {age} yoshdasiz.")

if age >= 18:
    print("Siz voyaga yetgansiz.")
else:
    print("Siz hali yoshsiz.")`,
        completed: false
      }
    ]
  }
];

export const getRandomLogs = (): string[] => {
  const logs = [
    "Starting code execution...",
    "Parsing syntax...",
    "Running tests...",
    "Test 1: Variable declaration ✓",
    "Test 2: Function execution ✓", 
    "Test 3: Output validation ✓",
    "All tests passed successfully!",
    "Code execution completed."
  ];
  
  const errorLogs = [
    "Starting code execution...",
    "Parsing syntax...",
    "SyntaxError: Unexpected token",
    "Test 1: Variable declaration ✗",
    "Expected 'let' but found 'var'",
    "Please fix the syntax error and try again."
  ];
  
  return Math.random() > 0.3 ? logs : errorLogs;
};