function Footer() {
  return (
    <div className="flex flex-col lg:flex-row h-auto p-6 lg:p-10 leading-7 bg-gray-100">
      <ul className="mr-2 mb-6 lg:mr-64">
        <li>
          <h2 className="font-semibold mb-2">A propos</h2>
        </li>
        <li>
          <a href="#">Fonctionnement du site</a>
        </li>
        <li>
          <a href="#">Conditions générales de vente</a>
        </li>
        <li>
          <a href="#">Données et confidentialité</a>
        </li>
      </ul>

      <ul className="mr-2 mb-6 lg:mr-64">
        <li>
          <h2 className="font-semibold mb-2">Nos hébergements</h2>
        </li>
        <li>
          <a href="#">Charte qualité</a>
        </li>
        <li>
          <a href="#">Soumettre votre hôtel</a>
        </li>
      </ul>

      <ul className="mr-2 mb-6 lg:mr-64">
        <li>
          <h2 className="font-semibold mb-2">Assistance</h2>
        </li>
        <li>
          <a href="#">Centre d'aide</a>
        </li>
        <li>
          <a href="#">Nous contacter</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
