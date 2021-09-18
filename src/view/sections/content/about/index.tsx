import { StyledDiv } from "./styles";
import InfoBlock from "./InfoBlock";

export default function About() {
  return (
    <StyledDiv>
      <h1 className="boldTitle">
        Hello, my name is Vitalii Variichuk and I want to become React Developer
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore et
        laudantium ullam impedit dolorum quia praesentium amet saepe id soluta,
        corporis est sit deserunt reiciendis repellat esse nemo aperiam.
      </p>
      <InfoBlock
        title="Education:"
        info={[
          "Lesya Ukrainka Volyn National University (2014 - 2020)",
          "Department of Psychology and Sociology",
          "Master's degree in Sociology (with honours)",
        ]}
      />
      <InfoBlock
        title="Soft skills:"
        info={[
          "Problem solving",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
          "Lorem ipsum",
        ]}
      />
      <InfoBlock
        title="Languages:"
        info={[
          "English (A2 - B1)",
          "Ukrainian (native)",
          "Russian (proficiency)",
        ]}
      />
      <InfoBlock
        title="Hardware"
        info={[
          "CPU: AMD Ryzen 5 3400g",
          "Video: Radeon™ RX Vega 11 Graphics (2 Gb)",
          "RAM: 16 Gb",
          "SSD: Kingston A400",
          "Microphone: HyperX QuadCast",
        ]}
      />
    </StyledDiv>
  );
}
