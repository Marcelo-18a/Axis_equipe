import Header from "@/components/header";
import TeamMember from "@/components/team-member";

export default function SobrePage() {
  const teamMembers = [
    {
      name: "Marcelo Augusto",
      role: "Developer, 19 anos",
      description:
        "desenvolvimento web full stack. Busco aprimorar minhas habilidades em Node.js, Express e React.",
      imageUrl: "/team/Marcelo_ft.png",
    },
    {
      name: "Yago Kurashiki",
      role: "Developer, 19 anos",
      description:
        "desenvolvimento full-stack. Atua na área de TI e busca aprimorar habilidades em Java Spring Boot e React.",
      imageUrl: "/team/yago_ft.png",
    },
    {
      name: "Carlos Eduardo",
      role: "Developer Back-End, 19 anos",
      description:
        "desenvolvimento de software focado no back-end. Atualmente, estou aprofundando meus conhecimentos na stack MERN (MongoDB, Express, React e Node.js).",
      // Coloque a imagem deste membro em `public/team/carlos.jpg`
      imageUrl: "./team/kadu_ft.png",
    },
    {
      name: "Sthevens Konesuk",
      role: "Developer Back-End, 20 anos",
      description:
        "com experiência na segurança, infraestrutura, administração das redes, configuração de servidores e monitoramento de servidores.",
      imageUrl: "/team/sthevens_ft.png",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />

      <section className="bg-gray-800 py-12 px-6 text-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-lg">
            Somos alunos de Desenvolvimento de Software Multiplataforma da FATEC
            de Registro e estamos desenvolvendo um aplicativo para auxiliar os
            produtores de mandioca e ajudar no combate à Xanthomonas Phaseolii.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nosso Projeto</h2>
          <p className="text-lg mb-6">
            Estamos desenvolvendo um aplicativo inovador para auxiliar os
            produtores de mandioca no combate à Xanthomonas Phaseolii, uma
            doença que afeta significativamente as plantações.
          </p>
          <p className="text-lg">
            Nossa solução utiliza tecnologia de ponta para identificar
            precocemente os sinais da doença e fornecer orientações precisas
            sobre as melhores práticas de manejo e controle.
          </p>
        </div>
      </section>

      <footer className="bg-primary py-4 px-6 text-black text-center">
        <p>
          &copy; {new Date().getFullYear()} Axis Team - Todos os direitos
          reservados
        </p>
      </footer>
    </main>
  );
}
