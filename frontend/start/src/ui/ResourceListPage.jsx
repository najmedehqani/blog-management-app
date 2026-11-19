// Shared shell for a dashboard list page: a heading with an optional action
// (e.g. a "create" button) above the table/content. Keeps the simple list
// pages consistent; pages with richer toolbars (search + create) keep their own
// header layout.
export default function ResourceListPage({ title, action, children }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-secondary-700 font-bold text-xl">{title}</h1>
        {action}
      </div>
      {children}
    </div>
  );
}
