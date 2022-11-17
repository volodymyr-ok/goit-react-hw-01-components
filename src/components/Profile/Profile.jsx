import {
  ProfileCard,
  ProfileWrap,
  ProfileInfo,
  ProfileImage,
  UserName,
  UserInfo,
  StatsList,
  StatsItem,
  StatsType,
  StatsData,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileWrap>
        <ProfileInfo>
          <ProfileImage src={avatar} alt={username} />
          <UserName>{username}</UserName>
          <UserInfo>@{tag}</UserInfo>
          <UserInfo>{location}</UserInfo>
        </ProfileInfo>

        <StatsList>
          <StatsItem>
            <StatsType>Followers</StatsType>
            <StatsData>{stats.followers}</StatsData>
          </StatsItem>
          <StatsItem>
            <StatsType>Views</StatsType>
            <StatsData>{stats.views}</StatsData>
          </StatsItem>
          <StatsItem>
            <StatsType>Likes</StatsType>
            <StatsData>{stats.likes}</StatsData>
          </StatsItem>
        </StatsList>
      </ProfileWrap>
    </ProfileCard>
  );
};
