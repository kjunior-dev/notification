import ProfileCard from "@/components/ProfileCard";
import { mockProfileResponse } from "@/MockProfileResponse/mockProfileResponse";
import { buildProfilesFromResponse } from "@/utils/utils";

export default function Home() {
  const profiles = buildProfilesFromResponse(mockProfileResponse);

  console.log(profiles);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Lista de Perfis</h1>
      {profiles.map((profile) => (
        <ProfileCard key={profile.key} profile={profile} />
      ))}
    </div>
  );
}
