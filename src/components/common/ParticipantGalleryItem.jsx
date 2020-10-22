import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";

const ParticipantGalleryItem = props => {
  const [ isOpen, setIsOpen ] = useState(false)

  const content = props.content || {};

  return (
    <>
      <div className="participant" onClick={() => setIsOpen(true)}>
        <div className="participant-image">
          <div className="participant-image-container">
            <img src={content.image.imageSrc} alt={content.image.title}/>
          </div>
        </div>
        <div className="participant-name">
          {content.name}
        </div>
        <div className="participant-affiliate-organization">
          {content.affiliateOrganization}
        </div>
      </div>
      <Dialog maxWidth="sm" fullWidth open={isOpen} PaperProps={{square: true}} onClose={() => setIsOpen(false)}>
        <DialogContent className="participant-modal">
          <Grid container className="position-relative">
            <Grid item xs={6}>
              <div className="participant-image-lg">
                <img src={content.image.imageSrc} alt={content.image.title}/>
              </div>
            </Grid>
            <Grid item xs={6}>
              <h2>{content.name}</h2>
              <div className="participant-affiliate-organization">{content.affiliateOrganization}</div>
            </Grid>
            <Grid item xs={12}>
              <div className="mt-10 mb-5" dangerouslySetInnerHTML={{__html: content.description}}/>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

ParticipantGalleryItem.defaultProps = {
  content: {},
  classes: "",
  onSave: () => { console.log('implement a function to save changes') }
}

export default ParticipantGalleryItem;
