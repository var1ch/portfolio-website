import { SiTypescript, SiReact, SiRedux } from "react-icons/si";

interface Props {
  name: "typescript" | "react" | "redux";
}

export default function Icon(props: Props) {
  switch (props.name) {
    case "typescript":
      return <SiTypescript />;
    case "react":
      return <SiReact />;
    case "redux":
      return <SiRedux />;
  }
}
