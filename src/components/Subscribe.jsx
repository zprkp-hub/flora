function Subscribe() {
  return (
    <section className="subscribe">
      <h2 className="section-title">Подписка на рассылку</h2>
      <p>Узнавайте о новых растениях и акциях первыми. Никакого спама.</p>
      <form className="subscribe__form">
        <input className="field" type="email" placeholder="Ваш e-mail" required />
        <button className="btn" type="submit">Подписаться</button>
      </form>
    </section>
  );
}

export default Subscribe;
