export const getImagePath = (carrier: string) => {
    switch (carrier) {
      case "SU":
        return `src/shared/assets/images/carriers/Aeroflot_Soviet_Airlines_logo.png`;
      case "TK":
        return `src/shared/assets/images/carriers/turkish-airlines-logo.png`;
      case "S7":
        return `src/shared/assets/images/carriers/S7_new_logo.png`;
      case "BA":
        return `src/shared/assets/images/carriers/british-airways-logo.png`;
      default:
        return `src/shared/assets/images/carriers/placeholder.png`; // Use a default image if carrier is not recognized
    }
  };
  
