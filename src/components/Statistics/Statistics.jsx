import {
  Stats,
  StatList,
  StatsItem,
  StatsLabel,
  StatsPerc,
} from './Statistic.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Stats>
      {title && <h2>{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <StatsLabel>{label}</StatsLabel>
              <StatsPerc>{percentage}%</StatsPerc>
            </StatsItem>
          );
        })}
      </StatList>
    </Stats>
  );
};
