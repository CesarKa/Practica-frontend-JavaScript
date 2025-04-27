export const buildUnauthorizedSession = () => {
  return `
    <a href="./login.html">Login</a>
    <a href="./register.html">Registro</a>
  `;
}

export const buildAuthorizedSession = () => {
  return `
    <a href="./create-advertisement.html">Crear Anuncio</a>
    <button class="logout">Cerrar sesión</button>
  `;
}
