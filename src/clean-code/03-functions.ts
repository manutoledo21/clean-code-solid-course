(() => {
  // función para obtener información de una película por Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  } // malo

  function getMovieById(id: string) {
    console.log({ id });
  } // bueno

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  } // malo

  function getMovieCastById(id: string) {
    console.log({ id });
  } // bueno

  // funcion para obtener el bio del actor por el id
  function getUsuario(ActorId: string) {
    console.log({ ActorId });
  } // malo

  function getActorBioById(id: string) {
    console.log({ id });
  } // bueno

  // Crear una película
  function movie(title: string, description: string, rating: number, cast: string[]) {
    console.log({ title, description, rating, cast });
  } // malo

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ cast, description, rating, title }: Movie) {
    console.log({ cast, description, rating, title });
  } // bueno

  // Crea un nuevo actor
  function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;
  } // malo

  function createNewActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;
  } // bueno

  const getPayAmountBadExample = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  }; // malo

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    return isRetired ? 3000 : 4000;
  }; // bueno
})();
