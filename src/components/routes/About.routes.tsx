import {
  AboutHeadings,
  StyledAboutImgWrapper,
  StyledAboutSpan,
  StyledAboutSpanWide,
} from "../StyledComponents/about/StyledAbout";
import { StyledAboutImage } from "../StyledComponents/about/StyledAbout";
import { StyledWrapperCol } from "../StyledComponents/StyledWrappers";

export const About = () => {
  return (
    <>
      <StyledWrapperCol>
        <AboutHeadings>ABOUT</AboutHeadings>
        <StyledAboutSpan>
          Zoo Learn all about what a zoo is, what animals are cared for in zoos,
          and fun zoo animal facts for children using this Teaching Wiki page.
          Welcome to our page providing useful and informative zoo animal facts
          for children. Here, you’ll discover what zoos are, how they are used,
          whether they are good or bad, and fun zoo animal facts for children!
        </StyledAboutSpan>
        <StyledAboutImgWrapper>
          <StyledAboutImage
            src="https://collection.cdn-pictorem.com/collection/900_Murders%20in%20the%20zoo.jpg"
            alt=""
          />
          <StyledAboutImage
            src="https://storage.googleapis.com/pod_public/750/127831.jpg"
            alt=""
          />
          <StyledAboutImage
            src="https://i.ebayimg.com/images/g/ByYAAOSwJ4hY9MhV/s-l500.jpg"
            alt=""
          />
        </StyledAboutImgWrapper>

        <AboutHeadings>What is a zoo?</AboutHeadings>
        <StyledAboutSpanWide>
          A zoo is a facility where animals are housed, cared for, displayed to
          the public, and bred in captivity. They often include animals that
          aren’t native, meaning that they wouldn’t naturally be found in that
          part of the world. Zoos provide the opportunity for endangered species
          to be cared for and protected. In other words, humans intervene to
          make sure that certain animals don’t become extinct. If an animal
          becomes extinct, that means that it won’t exist anymore. Modern zoos
          as we see them today were first established in the 18th century. The
          first ever modern zoo opened in Paris in 1793. During this time,
          knowledge of science and the world around us was expanding rapidly.
          This is known as the Enlightenment, as people’s knowledge was
          enlightened with new, scientific information. The first zoos were
          simply used to show off as many animals as possible. Most animals
          during the 18th century were not bred in captivity, but taken from
          their natural habitat to be put on display. There was little
          consideration for their animals, as they lived in small cages and
          little efforts were made to provide for their welfare. Today, zoos put
          the care and welfare of the animals first. They are used as
          educational facilities to teach visitors about conservation and the
          importance of different animal species around the world. Zoos are also
          used as research centres, meaning that the animals and habitats that
          they live in are studied carefully to ensure that the species are
          cared for in the correct way. If an animal is endangered, meaning it’s
          close to extinction, zoos often undergo breeding programmes to ensure
          that the animal is saved from extinction. These are safe environments
          for animals to breed without the risks that their natural habitats
          might possess. These risks could include pollution, climate change,
          and human destruction to habitats through acts such as deforestation,
          road building or expanding cities. The main goal of zoos is to
          reintroduce animals into their natural habitat when it's safe to do
          so. This includes breeding programmes and mimicking their environment
          as close as possible to their natural habitat.
        </StyledAboutSpanWide>
      </StyledWrapperCol>
    </>
  );
};
