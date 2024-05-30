(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false }, // o también se podría llamar "toDelete"
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  // malos
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea
  1;
  // día de hoy - today
  const ddmmyyyy = new Date(); // malo
  const today = new Date(); // bueno

  // días transcurridos - elapsed time in days
  const d: number = 23; // malo
  const elapsedTimeInDays: number = 23; // bueno

  // número de archivos en un directorio - number of files in directory
  const dir = 33; // malo
  const numberOfFilesInDirectory = 33; // bueno

  // primer nombre - first name
  const nombre = 'Fernando'; // malo
  const firstName = 'Fernando'; // bueno

  // primer apellido - last name
  const apellido = 'Herrera'; // malo
  const lastName = 'Herrera'; // bueno

  // días desde la última modificación - days since modification
  const dsm = 12; // malo
  const daysSinceModification = 12; // bueno

  // cantidad máxima de clases por estudiante - max classes per student
  const max = 6; // malo
  const maxClassesPerStudent = 6; // bueno
})();
