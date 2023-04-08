const createMatches = (teams, teamAvailability) => {
  const matches = [];
  for (let i = 0; i < teams.length - 1; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      const commonDays = teamAvailability[i].filter((day) =>
        teamAvailability[j].includes(day)
      );
      matches.push({
        Match: `${teams[i]} vs ${teams[j]}`,
        Day: commonDays,
      });
    }
  }

  return matches;
};
export default createMatches
