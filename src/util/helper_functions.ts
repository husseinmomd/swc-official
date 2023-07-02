export function hasMatchingSkills(
  profileSkills: string[],
  skillsToFilter: string[]
): boolean {
  return profileSkills.some((skill) => skillsToFilter.includes(skill));
}
