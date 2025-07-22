import { getProfile, getProjects, getExperience, getEducation, getSkills } from '@/lib/data';
import { PortfolioClientLayout } from '@/components/principal/portfolio-client-layout';
import Footer from '@/components/layout/footer';

export default async function Home() {
  const [profile, projects, experience, education, skills] = await Promise.all([
    getProfile(),
    getProjects(),
    getExperience(),
    getEducation(),
    getSkills()
  ]);

  return (
    <PortfolioClientLayout
      profile={profile}
      projects={projects}
      experience={experience}
      education={education}
      skills={skills}
    >
      <Footer />
    </PortfolioClientLayout>
  );
}
