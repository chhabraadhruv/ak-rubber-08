
import { pneumaticOringReplacementContent } from './pneumatic-system-o-ring-replacement-guide';
import { hydraulicSealInstallationContent } from './hydraulic-cylinder-seal-kit-installation-guide';

const blogContentMap: Record<string, string> = {
  'pneumatic-system-o-ring-replacement-guide': pneumaticOringReplacementContent,
  'hydraulic-cylinder-seal-kit-installation-guide': hydraulicSealInstallationContent,
};

export const getBlogContent = (slug: string): string | null => {
  return blogContentMap[slug] || null;
};

export { pneumaticOringReplacementContent, hydraulicSealInstallationContent };
