interface Props {
  title: string;
  info: string[];
}

export default function InfoBlock(props: Props) {
  return (
    <div className={`info-block`}>
      <h2 className="bold-title">{props.title}</h2>
      <div>
        {props.info.map((info) => (
          <p>{info}</p>
        ))}
      </div>
    </div>
  );
}
