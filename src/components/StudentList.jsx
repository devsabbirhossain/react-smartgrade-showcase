import { Fragment } from "react";
import StudentSearchForm from "./Form/StudentSearchForm";

const allClasses = [
  {
    className: "One",
    students: [
      {
        id: "1",
        img: "./images/avatar.png",
        name: "Sabbir Hossain",
        score: "A+",
        percentage: "100%",
      },
      {
        id: "2",
        img: "./images/avatar.png",
        name: "Shakhawat Hossain",
        score: "C+",
        percentage: "55%",
      },
      {
        id: "3",
        img: "./images/avatar.png",
        name: "Abdur Rahman",
        score: "B+",
        percentage: "70%",
      },
      {
        id: "4",
        img: "./images/avatar.png",
        name: "Sultana Mimi",
        score: "A+",
        percentage: "100%",
      },
      {
        id: "5",
        img: "./images/avatar.png",
        name: "Kasem Mulla",
        score: "A",
        percentage: "80%",
      },
      {
        id: "6",
        img: "./images/avatar.png",
        name: "Meherun Nahar",
        score: "B+",
        percentage: "80%",
      },
      {
        id: "7",
        img: "./images/avatar.png",
        name: "Abdul Alim",
        score: "B+",
        percentage: "80%",
      },
      {
        id: "8",
        img: "./images/avatar.png",
        name: "Ekra Moni",
        score: "F",
        percentage: "20%",
      },
      {
        id: "9",
        img: "./images/avatar.png",
        name: "Sabbir Ahmed",
        score: "C",
        percentage: "65%",
      },
      {
        id: "10",
        img: "./images/avatar.png",
        name: "Prince Mahmud",
        score: "D+",
        percentage: "40%",
      },
    ],
  },
  {
    className: "Two",
    students: [
      {
        id: "1",
        img: "./images/avatar.png",
        name: "Aryan Sabbir",
        score: "B+",
        percentage: "80%",
      },
      {
        id: "2",
        img: "./images/avatar.png",
        name: "Sharmin Jahan",
        score: "A+",
        percentage: "100%",
      },
      {
        id: "3",
        img: "./images/avatar.png",
        name: "Shoukat Alam",
        score: "A",
        percentage: "85%",
      },
      {
        id: "4",
        img: "./images/avatar.png",
        name: "Saiful Islam",
        score: "B",
        percentage: "70%",
      },
      {
        id: "5",
        img: "./images/avatar.png",
        name: "Ram Bonik",
        score: "B+",
        percentage: "80%",
      },
      {
        id: "6",
        img: "./images/avatar.png",
        name: "Roman Biswas",
        score: "C+",
        percentage: "55%",
      },
      {
        id: "7",
        img: "./images/avatar.png",
        name: "Kawsar Ahmed",
        score: "A+",
        percentage: "100%",
      },
      {
        id: "8",
        img: "./images/avatar.png",
        name: "Shobuj Sharma",
        score: "B+",
        percentage: "80%",
      },
      {
        id: "9",
        img: "./images/avatar.png",
        name: "Asif Akbar",
        score: "B-",
        percentage: "70%",
      },
      {
        id: "10",
        img: "./images/avatar.png",
        name: "Sultan Nasir",
        score: "A",
        percentage: "90%",
      },
    ],
  },
  {
    className: "Three",
    students: [
      {
        id: "1",
        img: "./images/avatar.png",
        name: "Saria Islam",
        score: "A+",
        percentage: "100%",
      },
      {
        id: "2",
        img: "./images/avatar.png",
        name: "Shahanag Pervin",
        score: "A-",
        percentage: "75%",
      },
      {
        id: "3",
        img: "./images/avatar.png",
        name: "Eahea Talkukder",
        score: "C+",
        percentage: "50%",
      },
      {
        id: "4",
        img: "./images/avatar.png",
        name: "Rina Begum",
        score: "B+",
        percentage: "80%",
      },
      {
        id: "5",
        img: "./images/avatar.png",
        name: "Rajesh Khanna",
        score: "A+",
        percentage: "100%",
      },
      {
        id: "6",
        img: "./images/avatar.png",
        name: "Milon Hasan",
        score: "C-",
        percentage: "55%",
      },
      {
        id: "7",
        img: "./images/avatar.png",
        name: "Rifat Talukder",
        score: "B+",
        percentage: "80%",
      },
      {
        id: "8",
        img: "./images/avatar.png",
        name: "Sifat Sharma",
        score: "A+",
        percentage: "95%",
      },
      {
        id: "9",
        img: "./images/avatar.png",
        name: "Ayat Islam",
        score: "B",
        percentage: "70%",
      },
      {
        id: "10",
        img: "./images/avatar.png",
        name: "Fuad Hasan",
        score: "B-",
        percentage: "75%",
      },
    ],
  },
];

const StudentList = () => {
  const classList = allClasses.map((singleClass) => {
    return (
      <Fragment key={singleClass.className}>
        <tr className="bg-white/5">
          <td className="p-5 text-sm md:text-xl" colSpan="4">
            className {singleClass.className}
          </td>
        </tr>
        {singleClass.students.map((student, studentid) => (
          <tr className="border-b border-[#7ECEB529]" key={studentid}>
            <td className="p-5 text-sm md:text-xl">{student.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={student.img}
                  width="32"
                  height="32"
                  alt={student.name}
                />
                <span className="whitespace-nowrap">{student.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.percentage}
            </td>
          </tr>
        ))}
      </Fragment>
    );
  });
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <StudentSearchForm />
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>{classList}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StudentList;
