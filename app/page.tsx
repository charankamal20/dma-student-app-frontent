import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="pb-44">
      <section className="h-screen grid lg:grid-cols-2 justify-center items-center">
        <div className="items-center place-content-start space-y-6">
          <h1 className="font-bold text-5xl md:text-7xl">
            Your Personalized Learning Companion
          </h1>
          <p className="leading-8 text-lg max-w-2xl">
            Are you looking to excel in your studies and reach your full
            academic potential? Look no further! EduTrack is here to support you
            every step of the way on your learning journey.
          </p>
          <div className="space-x-2 flex">
              <Link className="z-10" href='/test'>
            <button className="px-4 font-semibold py-4 border border-black hover:border-accent flex justify-center items-center gap-x-2 bg-black group relative text-white overflow-hidden">
              <div className="absolute w-full h-full -translate-x-full group-hover:-translate-x-0 duration-300 ease-in-oout bg-accent z-10"></div>
                <span className="z-10">Try Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide z-10 lucide-arrow-right"
                >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
                </Link>
            <Link href='#footer'>
            <button className="px-4 font-semibold py-4 border flex justify-center items-center gap-x-2 bg-white group relative text-black hover:text-white border-black overflow-hidden">
              <div className="absolute w-full h-full -translate-x-full group-hover:-translate-x-0 duration-300 ease-in-oout bg-black z-10"></div>
              <span className="z-10">View Code</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide z-10 lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="images/student.svg"
            width={400}
            height={400}
            alt="Student"
            className="hidden lg:block w-4/5 lg:w-3/5"
          />
        </div>
      </section>
      <section className="max-w-3xl mx-auto space-y-8 ">
        <div className="flex flex-col space-y-4 justify-center">
          <span className="text-4xl font-semibold">What is EduTrack?</span>
          <p className="font-normal text-base leading-7 max-w-2xl">
            Edutrack is a student performance prediction model that is designed
            to forecast the academic performance of students based on various
            input factors. Leveraging machine learning techniques, particularly
            ensemble learning with a stacking regressor, the model processes
            data related to students study habits, previous academic scores,
            extracurricular activities, sleep patterns, and practice with sample
            question papers.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold">Key Features:</h2>
          <ul className="space-y-4 max-w-2xl">
            <li className="list-disc space-y-2 list-inside">
              <span className="font-semibold">Input Parameters:</span> The model
              takes into account several parameters, including hours studied,
              previous scores, extracurricular activities (yes/no), sleep hours,
              and the number of sample question papers practiced.
            <table className="text-center border w-full pb-2">
              <thead>
                <tr>
                  <th className="py-2 border border-black">Hours Studied</th>
                  <th className="py-2 border border-black">Previous Scores</th>
                  <th className="py-2 border border-black">Extracurricular Activities</th>
                  <th className="py-2 border border-black">Sleep Hours</th>
                  <th className="py-2 border border-black">Sample Question Papers Practiced</th>
                </tr>
              </thead>
              <tbody>{/* Table rows go here */}</tbody>
            </table>
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold">Preprocessing:</span> Before
              making predictions, the input data undergoes preprocessing steps,
              including scaling numerical features using MinMaxScaler and
              encoding categorical features like extracurricular activities
              using LabelEncoder.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold">Prediction:</span> Once the input
              data is preprocessed, the model utilizes a pre-trained stacking
              regressor to predict the students academic performance.
            </li>
            <li className="list-disc list-inside">
              <span className="font-semibold">Output:</span> The model returns
              the predicted performance score, providing valuable insights into
              the potential academic achievement of the student.
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 justify-center">
          <h2 className="text-4xl font-semibold">Areas of Usage:</h2>
          <p className="font-normal text-base leading-7 max-w-2xl">
            Educational institutions can deploy this model to assess students
            likely academic performance, enabling timely interventions and
            personalized support strategies. By analyzing various factors
            influencing student success, educators and administrators can
            optimize educational programs and support mechanisms to enhance
            overall student outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}
