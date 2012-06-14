
EXTNAME=delete-cookies-on-exit
XPINAME=$(EXTNAME).xpi
CONTENTS=install.rdf bootstrap.js 

all: $(XPINAME)

$(XPINAME): $(CONTENTS)
	zip $(XPINAME) $(CONTENTS)

clean:
	rm -f $(XPINAME)
