import { LinkingOptions } from '@react-navigation/native';

export const DeepLinkNavigation: LinkingOptions<{}> = {
  prefixes: ['awsmProject://'],
  config: {
    screens: {
      Invite: {
        path: 'Invite', // Matches intent://invite
        parse: {
          t: (token: string) => {
            console.log(token);
            return token;
          },
        },
      },
    },
  },
};
