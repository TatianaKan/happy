import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

const style = {};

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img className={style.img} src=''></img>
            <p className={style.felicitation}>
            Поздравляю с днем рожденья!<br />
            Пусть будет жизнь полна веселья,<br />
            Не будет грусти и хлопот,<br />
            А только счастье круглый год!<br />

            Желаю творческих успехов,<br />
            Прекрасных дней, улыбок, смеха.<br />
            Любви, душевного тепла,<br />
            Как сказка, чтобы жизнь была!<br />

            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
