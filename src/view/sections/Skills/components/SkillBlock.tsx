interface Props {
  title: string;
  description: string;
}

export default function SkillBlock(props: Props) {
  return (
    <div className="skill-block">
      <h2 className="boldTitle">{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
