
class Dev {
  constructor({
    devId,
    techs,
    github_username,
    name,
    avatar_url,
    bio,
    location,
  }) {
    this.devId = devId;
    this.techs = techs;
    this.github_username = github_username;
    this.name = name;
    this.avatar_url = avatar_url;
    this.bio = bio;
    this.location = location;
  }
};

export default Dev;