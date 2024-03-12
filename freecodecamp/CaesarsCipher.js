//Unit 3: Caesars Cipher
function rot13(str) {
    return str.replace(/[A-Z]/g, function(char) {
          const ascii = char.charCodeAt(0);
          let rotatedAscii = ascii + 13;
          if (rotatedAscii > 90) {
              rotatedAscii -= 26;
          }
          return String.fromCharCode(rotatedAscii);
      });
  }
  
  rot13("SERR PBQR PNZC");