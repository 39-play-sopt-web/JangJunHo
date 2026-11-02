import * as S from "../styles/Header.styles";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo to="/">
        PLAY <S.Sopt>SOPT</S.Sopt> <S.Movie>MOVIE</S.Movie>
      </S.Logo>
    </S.Wrapper>
  );
};

export default Header;
