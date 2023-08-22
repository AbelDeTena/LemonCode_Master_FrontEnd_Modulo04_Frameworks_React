import React from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "use-debounce";

import { ImageWithAnimation } from "../../commons/animationImg/animation";
import Background from "../../assets/video.mp4";
import Logo from "../../assets/title.png";
import portal from "../../assets/portal.png";
import { useApiCharacters } from "./component/useApiCharacters";
import { Modal } from "./component/modal";
import { Character } from "./component/model";

export const CharactersPage: React.FC = () => {
  const [character, setCharacter] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [debounceFilter] = useDebounce(character, 1000);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const apiServiceProps = {
    characterName: debounceFilter,
    currentPage: page,
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter(e.target.value);
  };

  const { characters } = useApiCharacters(apiServiceProps);

  const handleOpenModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigationPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNavigationNext = () => {
    if (page <= 42) setPage(page + 1);
  };

  return (
    <>
      <div className={"main"}>
        <video autoPlay loop muted playsInline>
          <source src={Background} type="video/mp4" />
        </video>

        <main className="content">
          <header>
            <img
              src={Logo}
              alt="Logo Rick and Morty"
              style={{ width: "550px", height: "auto" }}
            />

            <nav
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2em",
                alignItems: "center",
              }}
            >
              <picture
                className="image-container"
                onClick={handleNavigationPrev}
              >
                <img src={portal} alt="portal" className="rotate-on-hover" />
              </picture>

              <TextField
                autoFocus
                label="Search Characters"
                value={character}
                variant="filled"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: 3,
                  flexGrow: 1,
                }}
                onChange={handleFilter}
              />

              <picture
                className="image-container"
                onClick={handleNavigationNext}
              >
                <img src={portal} alt="portal" className="rotate-on-hover" />
              </picture>
            </nav>
          </header>

          <section
            style={{
              flexGrow: "1",
              display: "flex",
              flexWrap: "wrap",
              padding: "2em",
              gap: "2rem",
              justifyContent: "center",
              alignContent: "space-around",
            }}
          >
            {characters.map((character) => (
              <article
                key={character.id}
                className="character-container"
                onClick={() => handleOpenModal(character)}
              >
                <ImageWithAnimation imageUrl={character.image} />
                <div>
                  <span>{character.name}</span>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        selectedCharacter={selectedCharacter}
      />
    </>
  );
};
