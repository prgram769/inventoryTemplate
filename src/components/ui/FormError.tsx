function FormError({ error }: { error?: string[] }) {
  if (error) {
    return error.map((err, index) => (
      <div key={index} className="text-red-400 italic m-1 py-1">{err}</div>
    ));
  }

  return;
}

export { FormError }