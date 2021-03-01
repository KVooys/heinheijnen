import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MainTitleBar from './MainTitleBar';
import PostCard from './PostCard';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
    textAlign: "center",
    fontSize: "2.5em",
    fontWeight: 600,
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },

  footer: {
    margin: theme.spacing(3),
    textAlign: "center",
    fontSize: "1em"
  }
}));

const mainTitleBar = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Toverdrankjes voor geluk',
    date: 'Januari 2018',
    description:
      `De bundel Toverdrankjes voor Geluk bevat 20 duetten, een samenspel van Heijn Heijnen en Merik van der Torren. Elk duet bestaat uit een verhaal gevolgd door een passend gedicht. De sfeer is meestal opgewekt-weemoedig. In de meeste verhalen speelt de troost door muziek een rol. Volgens de filosoof Plato dringt niets zo diep door in het binnenste van de ziel als ritme en melodie. Hier en daar blinken vonkjes van tegendraadse humor, waarmee de schrijvers ons bijlichten op zoek naar identiteit en geluk.`,
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Rokade',
    date: 'Mei 2013',
    description:
      `Hoofdpersoon is de apotheker Ewoud van E. Tot zijn ontzetting ontdekt hij een complot om hem uit zijn winkeltje te werken. Hij voelt zich bedreigd. Natuurlijk stuurt zijn huisarts, Lode Priester hem naar de psychiater. Maar bij deze specialist, dr. Helleman, durft hij niet over zijn ontdekkingen te spreken - uit angst om gek te worden verklaard. Hij vertelt hem onder meer over de voordelen van het vega-leven en de charme van het schaken in een club. 
      Voor het eerst gaat hij een dagboek bijhouden. Daarin beschrijft hij de samenzwering wél. Hij voelt zich de belaagde koning in een schaakpartij tegen een Meesterschaker. Voorlopig kan hij zich nog troosten met zijn vrouw Mousa, hun dochtertje en zijn vioolspel. Maar de spanning in zijn leven loopt ondraaglijk op. Hoe moet dit aflopen? Deze – hier en daar hilarische – roman is als een schaakspel opgebouwd. 
      De Duitse vertaling is een door de auteur ingekorte versie van het origineel.`,
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

// const germanPost =  {
//   title: 'Rochade',
//   date: 'Mei 2013',
//   description:
//     `Die Hauptperson, der Apotheker Ewoud van E, entdeckt zu seinem Entsetzen einen gegen ihn geschmiedeten Komplott: Man versucht, ihn aus seinem Geschäft zu vertreiben. Er fühlt sich bedroht. Natürlich überweist sein Hausarzt, Lode Priester, ihn an einen Psychiater. Bei diesem Spezialisten traut sich der Apotheker aber nicht, über seine Entdeckung zu sprechen. Allzu groß ist die Angst, für verrückt erklärt zu werden. Er spricht aber mit ihm über die Vorzüge einer veganen Lebensweise und über den Reiz der Mitgliedschaft in einem Schachklub. 
//     Zum ersten Mal in seinem Leben führt er ein Tagebuch, in dem er die Verschwörung sehr wohl thematisiert. Er sieht sich als den bedrohten König in einem Spiel gegen einen Schachmeister. Vorerst findet er noch Trost bei seiner Frau Mousa, der kleinen Tochter und dem Geigenspiel. Die Spannung in seinem Leben steigert sich aber bis zum Unerträglichen. Wie soll das ausgehen? Dieser stellenweise komische Roman ist wie ein Schachspiel konstruiert. Die deutsche Übersetzung ist eine vom Autor gekürzte Fassung des niederländischen Originals. 
//     Für Bestellungen können Sie Ihre Kontaktdaten an die unten angegebene E-Mail-Adresse senden. Er wird sich dann so schnell wie möglich mit Ihnen in Verbindung setzen.`,
//   image: 'https://source.unsplash.com/random',
//   imageText: 'Image Text',
// }

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Title */}
      <Typography          
        component="h2"
        variant="h5"
        color="inherit"
        className={classes.title}>
          Hein Heijnen - homepage van de auteur
        </Typography>
      <Container>
        <main>
          <MainTitleBar post={mainTitleBar} />
          <Grid container spacing={4} className={classes.mainGrid}>
            {featuredPosts.map((post) => (
              <Grid item md={6}>
              <PostCard key={post.title} />
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>  
      {/* Footer     */}
      <Typography          
        component="h2"
        variant="h5"
        color="inherit"
        className={classes.footer}>
          Made with Material UI
        </Typography>
    </React.Fragment>
  );
}
