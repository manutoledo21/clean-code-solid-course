(() => {
  // arreglo de temperaturas celsius
  const arrayOfNums = [33.6, 12.34]; // malo
  const temperaturesCelsius = [33.6, 12.34]; // bueno

  // Dirección ip del servidor
  const ip = '123.123.123.123'; // malo
  const serverIpAddress = '123.123.123.123'; // bueno

  // Listado de usuarios
  const people = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ]; // malo

  const users = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ]; // bueno

  // Listado de emails de los usuarios
  const emails = people.map((u) => u.email); // malo
  const userEmails = users.map((user) => user.email); // bueno

  // Variables booleanas de un video juego
  const jump = false; // malo
  const canJump = false; // bueno

  const run = true; // malo
  const canRun = true; // bueno

  const noTieneItems = true; // malo
  const hasItems = false; // bueno

  const loading = false; // malo
  const isLoading = true; // bueno

  // Otros ejercicios
  // tiempo inicial
  const start = new Date().getTime(); // malo
  const startTime = new Date().getTime(); // bueno
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const end = new Date().getTime() - start; // malo
  const endTime = new Date().getTime() - startTime; // bueno

  // Funciones
  // Obtiene los libros
  function book() {
    throw new Error('Function not implemented.');
  } // malo

  function getBooks() {
    throw new Error('Function not implemented.');
  } // bueno

  // obtiene libros desde un URL
  function BooksUrl(u: string) {
    throw new Error('Function not implemented.');
  } // malo

  function getBooksURL(url: string) {
    throw new Error('Function not implemented.');
  } // bueno

  // obtiene el área de un cuadrado basado en sus lados
  function areaCuadrado(s: number) {
    throw new Error('Function not implemented.');
  } // malo

  function getSquareArea(side: number) {
    throw new Error('Function not implemented.');
  } // bueno

  // imprime el trabajo
  function printJobIfJobIsActive() {
    throw new Error('Function not implemented.');
  } // malo

  function printJob() {
    throw new Error('Function not implemented.');
  } // bueno
})();
