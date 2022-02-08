import moment from "moment";

const AccountComponent = ({ profile }) => {
  const createdAt = moment(profile.created_at).format("DD-MM-YYYY");
  return (
    <>
      <div class="_tab-account">
        <div class="_component-profile-information">
          <div class="_profile-information-title">My Account</div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <div class="_form-group-comp form-group">
                <label class="_form-label-comp">UserName</label>
                <input
                  readonly=""
                  type="text"
                  class="_form-input-comp form-control"
                  value={profile.email}
                />
              </div>
              <div class="_form-group-comp form-group">
                <label class="_form-label-comp">Nama Lengkap</label>
                <input
                  readonly=""
                  type="text"
                  class="_form-input-comp form-control"
                  value={profile.name}
                />
              </div>
              <div class="_form-group-comp form-group">
                <label class="_form-label-comp">Update Password</label>
                <input
                  readonly=""
                  type="password"
                  class="_form-input-comp form-control"
                  value="password"
                />
              </div>
              <div class="_form-group-comp form-group">
                <label class="_form-label-comp">Nomor Telepon</label>
                <input
                  readonly=""
                  type="text"
                  class="_form-input-comp form-control"
                  value=""
                />
              </div>
              <div class="_form-group-comp form-group">
                <label class="_form-label-comp">Email</label>
                <input
                  readonly=""
                  type="email"
                  class="_form-input-comp form-control"
                  value={profile.email}
                />
              </div>
              <div class="_form-group-comp form-group">
                <label class="_form-label-comp">Anggota Sejak</label>
                <input
                  readonly=""
                  type="text"
                  class="_form-input-comp form-control"
                  value={createdAt}
                />
              </div>
            </div>
          </div>
          <div class="_profile-information-notes">
            Informasi ini hanya dapat dilihat oleh Kamu
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountComponent;
