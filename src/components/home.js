import React, { Component } from "react";
import FlashVente from "./FlashVente";

class Home extends Component {
  render() {

    const article = {
      titre: "TITRE-ARTICLE",
      quantite: "QUANTITE",
      description:
        "DESCRIPTIONhgfffffffffxnvbnbvngj fh gfdhtsr uuk fj sv sdfvg gghfdgfsdgby  tn n DESCRIPTIONhgfffffffffxnvbnbvngj fh gfdhtsr uuk fj sv sdfvg gghby  tn n DESCRIPTIONhgfffffffffxnvbnbvngj fh gfdhtsr uuk fj sv sdfvg gghby  tn n DESCRIPTIONhgfffffffffxnvbnbvngj fh gfdhtsr uuk fj sv sdfvg gghby  tn n DESCRIPTIONhgfffffffffxnvbnbvngj fh gfdhtsr uuk fj sv sdfvg gghby  tn n ",
      prix: "PRIX"
	};
	
    const flash = [article, article, article, article, article, article];
	
	return (
      <div style={{ maxWidth: "60%", margin: "auto" }}>
        <FlashVente flash={flash} />
        <FlashVente flash={flash} />
      </div>
    );
  }
}

export default Home;