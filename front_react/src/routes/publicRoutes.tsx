import PublicRoute from 'components/PublicRoute';
import DashBoard from 'src/layout/DashBoard';

type RouteType = {
  name: string;
  path: string;
  icon?: React.ReactElement; // Si vous utilisez des icônes comme éléments React
  component?: React.ComponentType; // Pour les composants à afficher
  element?: React.ReactElement; // Pour les éléments React à afficher
  menuType?: 'primary' | 'secondary'; // Si vous avez différents types de menus
  isRequire: boolean;
};
/**
 * @name - Nom de la route (utilisé pour l'affichage dans le menu ou le breadcrumb par exemple)
 * @path - Chemin de la route (utilisé pour le routage)
 * @icon - Icône associée à la route (peut être utilisée dans le menu)
 * @component - Composant React à afficher lorsque cette route est active
 * @element - Élément React à afficher (alternative à `component`)
 * @menuType - Type de menu dans lequel cette route doit apparaître (par exemple, "primary" ou "secondary")
 * @isRequire - Indique si une authentification est requise pour accéder à cette route
 */
export const publicRoutes: RouteType[] = [
  {
    name: '',
    path: '/',
    element: (
      <PublicRoute>
        <DashBoard />
      </PublicRoute>
    ),
    isRequire: false
  }
];
