import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, Briefcase } from "lucide-react";

const InternshipSection = () => {
  return (
    <section id="internship" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">INTERNSHIP PROGRAM</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            At ESS, we believe in investing in future talent. Our IT Internship Program is designed to equip 
            final-year students and aspiring developers with practical, industry-relevant experience in the 
            latest technologies, including Microsoft Azure, Artificial Intelligence (AI), C#, Web Development, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 text-blue-300" size={28} />
                What We Offer:
              </h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <span className="text-blue-300 mr-3 mt-1">🔹</span>
                  <div>
                    <strong>Hands-on Training:</strong> Interns work on real-world projects under the guidance of experienced mentors.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-3 mt-1">🔹</span>
                  <div>
                    <strong>Modern Tech Stack:</strong> Exposure to cloud platforms like Azure, AI tools, RESTful APIs, databases, and front-end frameworks.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-3 mt-1">🔹</span>
                  <div>
                    <strong>Project Management Skills:</strong> Training in Scrum, agile development, and tools like Trello and Jira.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-3 mt-1">🔹</span>
                  <div>
                    <strong>Soft Skills Development:</strong> Communication, teamwork, time management, and presentation skills are an integral part of the curriculum.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-3 mt-1">🔹</span>
                  <div>
                    <strong>Capstone Project:</strong> Interns complete a full-fledged project applying all they've learned—ready to showcase in their portfolios.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="mr-3 text-blue-300" size={24} />
                  Duration:
                </h3>
                <p className="text-blue-100">
                  8 weeks (2 months) of structured learning and guided project work.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="mr-3 text-blue-300" size={24} />
                  Ideal For:
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Final-year students in BCA, B.Sc. IT, B.Tech, MCA, or similar disciplines.</li>
                  <li>• Beginners looking to transition into software development careers.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Briefcase className="mr-3 text-blue-300" size={24} />
                  Outcome:
                </h3>
                <p className="text-blue-100">
                  By the end of the program, interns not only build technical skills but also develop 
                  the confidence and mindset required for success in the software industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;