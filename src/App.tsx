import * as S from "./styles";
import M30SVG from "./components/M30SVG";
import { useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";
import { LogoAnimation } from "./components/LogoAnimation";
import { WhatsappLogo, InstagramLogo, EnvelopeSimple } from "phosphor-react";

export default function Index() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timeoutIdInicial = setTimeout(() => {
      setSplashScreen(false);
    }, 4000);

    return () => {
      clearTimeout(timeoutIdInicial);
    };
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "splashScreen"}>
      <S.Home splashScreen={splashScreen}>
        <S.Background />
        {splashScreen && <LogoAnimation />}
        <header>
          <M30SVG
            fill={"white"}
            alt={"Imagem da logotipo da empresa M30 Arquitetura"}
          />
        </header>
        <main aria-label="Mensagem informativa que o site está em desenvolvimento">
          Nosso site está em desenvolvimento.
        </main>
        <footer>
          <p aria-label="Meios de contato com a empresa M30 Arquitetura">
            Entre em contato conosco!
          </p>
          <nav className="Contatos">
            <a
              href="https://wa.me/5516982149970"
              target="_blank"
              aria-label="Link para WhatsApp"
            >
              <WhatsappLogo size={32} weight="thin" />
            </a>
            <a
              href="https://www.instagram.com/m30.arq/"
              target="_blank"
              aria-label="Link para Instagram"
            >
              <InstagramLogo size={32} weight="thin" />
            </a>
            <a
              href="mailto:muriloalves@m30.arq.br"
              target="_blank"
              aria-label="Link para e-mail"
            >
              <EnvelopeSimple size={32} weight="thin" />
            </a>
          </nav>
        </footer>
      </S.Home>
    </StyleSheetManager>
  );
}
