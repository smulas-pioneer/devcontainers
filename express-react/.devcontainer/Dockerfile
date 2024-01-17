# Usa l'immagine base di Ubuntu 20.04
FROM ubuntu:20.04

# Imposta variabili d'ambiente utili
ENV TZ=Europe/Rome
#ENV SHELL=/bin/zsh
ENV DEBIAN_FRONTEND=noninteractive

# Aggiorna i pacchetti e installa le dipendenze
RUN apt-get update && apt-get install -y \
    zsh \
    git \
    curl \
    make \
    vim

# Installa le dipendenze per Docker
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    gnupg-agent \
    software-properties-common

# Aggiungi la GPG key di Docker
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

# Aggiungi il repository di Docker all'elenco dei repository di APT
RUN add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"

# Installa Docker CLI
RUN apt-get update && apt-get install -y docker-ce-cli

# Pulizia del cache APT
RUN rm -rf /var/lib/apt/lists/*

# Installa Oh My Zsh
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Installa NVM, Node.js e TypeScript
ENV NVM_DIR=/usr/local/nvm
ENV NODE_VERSION 16.0.0
RUN mkdir -p $NVM_DIR \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && npm install -g typescript \
    && npm install -g pnpm

# Imposta zsh come shell di default
#RUN chsh -s $(which zsh)

# Imposta la working directory
WORKDIR /app

# Comando di default quando si esegue il container
#CMD ["zsh"]

# Reset DEBIAN_FRONTEND variable
ENV DEBIAN_FRONTEND=newt
