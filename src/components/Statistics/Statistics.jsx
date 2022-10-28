import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title className="title">{title}</Title>}

      <StatList>
        {stats.map(el => (
          <StatItem
            key={el.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{el.label}</Label>
            <Percentage>{el.percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;
