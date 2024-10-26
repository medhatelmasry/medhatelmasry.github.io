const SoftwarePage = () => {
    return (
      <section>       
        <h1 className="text-center">Software</h1>
        <ul>
          <li>
            <a className="text-decoration-none link-secondary" 
              href="https://icons.getbootstrap.com/">
                Bootstrap Icons
            </a>
          </li>
          <li>
            <a className="text-decoration-none link-secondary" 
              href="https://www.quackit.com/character_sets/emoji/emoji_v3.0/">
                List of emojis
            </a>
          </li>
          <li>
            <a className="text-decoration-none link-secondary" 
              href="https://github.com/marketplace/models">
                AI Models on GitHub Marketplace
            </a>
          </li>
          <li>
            <a className="text-decoration-none link-secondary" 
              href="https://gist.github.com/medhatelmasry">
                My gists
            </a>
          </li>
        </ul>

      </section>
    );
  };

  export default SoftwarePage;
  