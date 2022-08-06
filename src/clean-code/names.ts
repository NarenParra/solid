(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  const filesToDelete = filesToEvaluate.map((file) => file.flagged);
  //******************************* Ejemplo ********************************/
  // Archivos marcados para borrar - files to delete

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}
  //***************************************************************/

  // Todo: Tarea

  // día de hoy - today
  //const ddmmyyyy = new Date();
  const today = new Date();

  // días transcurridos - elapsed time in days
  //const d: number = 23;
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  //const dir = 33;
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  //const dsm = 12;
  const daysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  //const max = 6;
  const maxClassesPerStudent = 6;
})();
