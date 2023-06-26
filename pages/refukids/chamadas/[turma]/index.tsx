import { useRouter } from 'next/router';

export default function RefukidsTurmaChamadas() {
  const {query} = useRouter();

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h5>{query.turma} Chamada</h5>
          <p>Use this page to start from scratch and place your custom content.</p>
        </div>
      </div>
    </div>
  );
};

