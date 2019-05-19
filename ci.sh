#! /bin/bash
ssh root@167.99.106.189 << 'EOSSH'

    # move to sawyerburnett app directory
    cd sawyerburnett-nextjs/

    # pull the latest code
    git pull

    # get id of currently running sawyerburnett docker container
    container=$(docker ps -a -q --filter ancestor=sawyerburnett-nextjs --format="{{.ID}}")

    # stop the docker container
    docker stop $container
    
    # delete old container to save space
    docker rm $(docker ps --filter=status=exited --filter=status=created -q)

    # build a new docker container based upon updated repository
    docker build -t sawyerburnett-nextjs .

    # start the docker container
    docker-compose up -d
    
    # list currently running containers
    docker ps

    echo "looks like it worked!!!"
EOSSH
