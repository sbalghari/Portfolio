import screenshot1 from '../assets/screenshot/serp.png';
import screenshot2 from '../assets/screenshot/calc.png';
import screenshot3 from '../assets/screenshot/libmngr.png';
import screenshot4 from '../assets/screenshot/portfolio.png';

export const projectsData = {
    Project1: [
        { Name: "SERP-Manager" },
        { Description: "Student Examination Results and Paper Manager is a GUI application that can be used to manage students information, exam datesheets, results and provides management options for papers and much more."},
        { Technologies_used: "Python, SQLite, Customtkinter, Json",},
        { screenshot: screenshot1 },
        { Link: "https://github.com/Saifullah-Balghari/SERP-Manager"},
    ],
    Project2: [
        { Name: "Calculator" },
        { Description: "A simple GUI application that can perform various arithmetic operations like addition, subtraction and multiplication etc."},
        { Technologies_used: "Python, Tkinter"},
        { screenshot: screenshot2 },
        { Link: "https://github.com/Saifullah-Balghari/Arithmetic-Calculater"},
    ],
    Project3: [
        { Name: "Library Manager" },
        { Description: "A simple CLI application made with c++ capable of performing various library operations like adding, removing, editing, renaming, etc books"},
        { Technologies_used: "C++"},
        { screenshot: screenshot3 },
        { Link: "https://github.com/Saifullah-Balghari/LibraryManager"},
    ],
    Project4: [
        { Name: "Portfolio Website" },
        { Description: "..."},
        { Technologies_used: "ReactJS, TailwindCSS, Vite, NodeJS"},
        { screenshot: screenshot4 },
        { Link: "https://github.com/Saifullah-Balghari/Portfolio"},
    ],
};
