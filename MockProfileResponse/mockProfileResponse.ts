// mockData.ts

import { IProfileResponse } from "@/types/types";

export const mockProfileResponse: IProfileResponse = {
  app_name: "Sistema Corporativo",
  app_code: "SC001",
  accesses: [
    // Perfis de usuário
    {
      userinfo: {
        id: 1,
        email: "alice.silva@empresa.com",
        name: "Alice Silva",
        pessoa_id: 101,
      },
      profile_info: {
        id: 10,
        code: "ADMIN",
        name: "Administrador",
        description: "Acesso completo ao sistema",
      },
      entityinfo: null,
    },
    {
      userinfo: {
        id: 2,
        email: "bob.santos@empresa.com",
        name: "Bob Santos",
        pessoa_id: 102,
      },
      profile_info: {
        id: 11,
        code: "USER",
        name: "Usuário",
        description: "Acesso limitado a funcionalidades padrão",
      },
      entityinfo: null,
    },
    {
      userinfo: {
        id: 3,
        email: "carla.moura@empresa.com",
        name: "Carla Moura",
        pessoa_id: 103,
      },
      profile_info: {
        id: 12,
        code: "MANAGER",
        name: "Gestor",
        description: "Acesso a relatórios e gestão de equipe",
      },
      entityinfo: null,
    },

    // Perfis de entidade
    {
      userinfo: null,
      profile_info: null,
      entityinfo: {
        id: 201,
        name: "Empresa A",
        permission: "VIEW",
        permission_description: "Permissão apenas para visualização",
      },
    },
    {
      userinfo: null,
      profile_info: null,
      entityinfo: {
        id: 202,
        name: "Empresa B",
        permission: "EDIT",
        permission_description: "Permissão para editar registros",
      },
    },
    {
      userinfo: null,
      profile_info: null,
      entityinfo: {
        id: 203,
        name: "Empresa C",
        permission: "ADMIN",
        permission_description: "Permissão total para gerenciamento",
      },
    },

    // Mistos ou perfis sem info (fallback)
    {
      userinfo: {
        id: 4,
        email: "daniel.oliveira@empresa.com",
        name: "Daniel Oliveira",
        pessoa_id: 104,
      },
      profile_info: null,
      entityinfo: null,
    },
    {
      userinfo: null,
      profile_info: {
        id: 13,
        code: "TEMP",
        name: "Temporário",
        description: "Perfil temporário para testes",
      },
      entityinfo: null,
    },
    {
      userinfo: null,
      profile_info: null,
      entityinfo: null, // fallback completo
    },

    // Mais perfis de usuário para testes
    {
      userinfo: {
        id: 5,
        email: "eva.melo@empresa.com",
        name: "Eva Melo",
        pessoa_id: 105,
      },
      profile_info: {
        id: 14,
        code: "SUPPORT",
        name: "Suporte",
        description: "Acesso ao módulo de suporte",
      },
      entityinfo: null,
    },
    {
      userinfo: {
        id: 6,
        email: "felipe.costa@empresa.com",
        name: "Felipe Costa",
        pessoa_id: 106,
      },
      profile_info: {
        id: 15,
        code: "FINANCE",
        name: "Financeiro",
        description: "Acesso ao módulo financeiro",
      },
      entityinfo: null,
    },

    // Mais perfis de entidade para testes
    {
      userinfo: null,
      profile_info: null,
      entityinfo: {
        id: 204,
        name: "Empresa D",
        permission: "VIEW_EDIT",
        permission_description: "Visualização e edição limitada",
      },
    },
    {
      userinfo: null,
      profile_info: null,
      entityinfo: {
        id: 205,
        name: "Empresa E",
        permission: "ADMIN",
        permission_description: "Permissão administrativa completa",
      },
    },
  ],
};
