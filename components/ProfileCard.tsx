import React from "react";
import { Profile } from "@/types/types";

type Props = {
  profile: Profile;
};

const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <div className="border rounded-lg p-4 shadow mb-4 bg-white">
      <h2 className="text-lg font-bold mb-1">{profile.name}</h2>
      <p className="text-sm text-gray-600 mb-1">Tipo: {profile.type}</p>
      <p className="text-sm text-gray-600 mb-1">ID: {profile.id}</p>
      {profile.description && (
        <p className="text-sm text-gray-700 mb-1">Descrição: {profile.description}</p>
      )}
      {profile.pessoaId && (
        <p className="text-sm text-gray-700">Pessoa ID: {profile.pessoaId}</p>
      )}
      {profile.entityId && (
        <p className="text-sm text-gray-700">Entidade ID: {profile.entityId}</p>
      )}
    </div>
  );
};

export default ProfileCard;
