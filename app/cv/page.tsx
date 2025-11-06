import { TimelineItem, TimelineMarker } from "../components/cv/Timeline";

export default function CVPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16 text-dgray-900">
      <header className="flex flex-col gap-4 mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-dgray-900">
          Becca Hawkes
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-dgray-900">
          Professional Summary
        </h2>
        <p className="text-dgray-800">
          I am a product-focused, full-stack Software Engineer with 7+ years of
          experience across the Education, B2C and Financial Services sectors. I
          enjoy delivering strategic projects with high user impact, mentoring
          and growing teams, and driving engineering excellence and product
          quality.
        </p>
        <h2 className="text-gray-700 font-semibold">
          Core Languages & Technologies:
        </h2>
        <p className="text-gray-700">
          React, TypeScript, Clojure, Elixir, Next.js, AWS, Postgres, RabbitMQ
        </p>
        <h2 className="text-gray-700 font-semibold">
          Technical Leadership & Strategic Competencies:
        </h2>
        <p className="text-gray-700">
          Cross-functional stakeholder management & communication, Technical
          vision scoping & planning, Mentoring & hiring, Code quality review &
          testing, Product & business acumen
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2">
          <section aria-labelledby="experience-title">
            <h2
              id="experience-title"
              className="text-xl font-semibold text-dgray-900 mb-6"
            >
              Professional Experience
            </h2>

            <ol className="relative flex flex-col gap-10 border-s border-sage-300/70 pl-6">
              <li>
                <TimelineMarker />
                <TimelineItem
                  title="Lead Software Engineer"
                  company="Multiverse"
                  technologies={[
                    "React",
                    "Postgres",
                    "Next.js",
                    "TypeScript",
                    "Docker",
                    "Playwright",
                    "AWS",
                    "RabbitMQ",
                  ]}
                  startDate="2024"
                  endDate="Present"
                  logoSrc="/images/multiverse_logo.svg"
                  bulletPoints={[
                    "Led the delivery of multiple critical strategic projects including new onboarding flow for US commercial customers",
                    "Optimised and developed the learning diagnosis tooling for the product, leveraging LLMs for programme and course recommendations and ultimately improving time to conversion on-product by 21%",
                    "Defined and developed project scopes as technical lead and temporary product manager for new UK onboarding flow, ensuring stakeholder alignment and compliance standards",
                    "Completed technical build-out and delivery of the UK onboarding flow within a quarter, improving conversion rates by 43%",
                    "Initiated a company-wide design review process to reduce UI defects and influenced cross-squad adoption of testing best practices",
                    "Led adoption of TypeScript event architecture across multiple services and squads",
                    "Implemented a data visualization component framework with the design system",
                    "Mentored junior and new team members, helping contribute to promotions and rapid upskilling of new engineers in complex codebases",
                    "Co-led the winning team in an AI Hackathon, building a real-time voice-to-voice skills diagnosis and recommendation engine",
                  ]}
                />
              </li>
              <li>
                <TimelineMarker />
                <TimelineItem
                  title="Senior Software Engineer"
                  company="Multiverse"
                  technologies={[
                    "Elixir",
                    "Phoenix",
                    "Elm",
                    "Postgres",
                    "AWS",
                    "RabbitMQ",
                  ]}
                  startDate="2022"
                  endDate="2024"
                  logoSrc="/images/multiverse_logo.svg"
                  bulletPoints={[
                    "Developed new upskiller homepage for UK apprenticeship programmes",
                    "Optimised existing UK onboarding flow,  significantly improving conversion rates from user sign-up to programme approval",
                    "Led the split out of the first micro-service from the platform monolith",
                    "Pioneered full automation of the UK eligibility checks workflow, leveraging third party automations and email integrations",
                    "Managed technical integration and rollout of “HEAP” digital insight tool to enhance user journey analytics and reduce SLAs on user-facing bug diagnosis and resolution",
                    "Advocated for prioritisation of technical tech and code quality improvements as well as high quality delivery",
                    "Promoted AGILE best practices including TDD, retrospectives, and pair programming across development teams",
                    "Collaborated with internal stakeholders to refine product requirements and ensure fast build delivery and high quality user experience",
                    "Led the first accessibility code reviews and championed the rollout of developer accessibility tools such as “WAVE”",
                  ]}
                />
              </li>
              <li>
                <TimelineMarker />
                <TimelineItem
                  title="AVP Software Engineer"
                  company="Deutsche Bank"
                  logoSrc="/images/deutsche_bank_logo.svg"
                  technologies={[
                    "SQL",
                    "React",
                    "JavaScript",
                    "Jenkins",
                    "Cypress",
                    "Clojure",
                    "Cypher",
                    "Oracle",
                  ]}
                  startDate="2017"
                  endDate="2018"
                  bulletPoints={[
                    "Developed a pre-issuance bond pricing and workflow web application",
                    "Led release and test pipeline automations and value stream mapping to improve DORA metrics",
                    "Managed on-going internal user engagement to optimise and evolve application, ensuring fast feedback loops and recovery times",
                  ]}
                />
              </li>
              <li>
                <TimelineMarker />
                <TimelineItem
                  title="Graduate Analyst/Developer"
                  company="Deutsche Bank"
                  technologies={["Python", "SQL", "SAP PowerDesigner"]}
                  logoSrc="/images/deutsche_bank_logo.svg"
                  startDate="2018"
                  endDate="2019"
                  bulletPoints={[
                    "Created and managed a network information database comprised of approximately 40 tables",
                    "Automated the processing and collation of network information data from 5 key sources across the bank",
                    "Used this data to optimise system bandwidth by adapting Dijkstra’s algorithm",
                  ]}
                />
              </li>
              <li>
                <TimelineMarker />
                <TimelineItem
                  title="Data Analyst"
                  company="NewVoiceMedia (now Voyage)"
                  technologies={[]}
                  startDate="2018"
                  endDate="2019"
                  logoSrc="/images/nvm_logo.png"
                  bulletPoints={[
                    "Led automation and optimisation of HR and Finance systems, transforming manual processes into streamlined workflows and delivering data insights to support executive decision-making",
                  ]}
                />
              </li>
            </ol>
          </section>
        </div>

        <aside className="lg:col-span-1 space-y-10">
          <section aria-labelledby="education-summary">
            <h2
              id="education-summary"
              className="text-xl font-semibold text-dgray-900 mb-4"
            >
              Education
            </h2>
            <ul className="space-y-4">
              <li>
                <div className="rounded-lg bg-cream-50 ring-1 ring-sage-200 p-4">
                  <p className="font-medium text-dgray-900">
                    BSc Mathematics (1st)
                  </p>
                  <p className="text-sm text-dgray-700">
                    University of Bath · 2014 – 2017
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section aria-labelledby="about-title">
            <h2
              id="about-title"
              className="text-xl font-semibold text-dgray-900 mb-4"
            >
              Career Objectives
            </h2>
            <div className="rounded-lg bg-cream-50 ring-1 ring-sage-200 p-4">
              <p className="text-dgray-800">
                I am seeking a role where I can work on an impactful product
                that considers user feedback and experimentation in its
                optimization, while leveraging my experience in technical
                leadership, product development, and strategic project delivery.
              </p>
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}
